<script>
  import Main from '../components/Main.svelte';
  export let status;
  export let error;

  const dev = process.env.NODE_ENV === 'development';
</script>

<svelte:head>
    <title>{status}</title>
</svelte:head>

<Main>
  <div class="Error">
    <h1>{status}</h1>
    <p>{error.message}</p>
    {#if dev && error.stack}
      <pre>{error.stack}</pre>
    {/if}
  </div>
</Main>