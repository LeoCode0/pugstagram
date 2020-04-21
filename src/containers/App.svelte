<script>
    import { onMount } from 'svelte';
    import Header from '../components/Header.svelte';
    import Main from '../components/Main.svelte';
    import Sidebar from '../components/Sidebar.svelte';
    import TimeLine from '../components/TimeLine.svelte';

    let data = {}
    const API = 'https://us-central1-pugstagram-co.cloudfunctions.net/data'

onMount(async () => {
        const response = await fetch(API)
        data = await response.json()
    });
</script>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Lato&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap');
    :global(body){
        background-color: #FAFAFA;
        color: rgba(38, 38, 38, 0.7);
        font-family: 'Lato', sans-serif;
        margin: 0;
        padding: 0;
    }

    :global(h1, h2, h3){
        margin: 0;
        padding: 0;
    }

</style>

<Header />
<Main>
    <TimeLine posts={data.posts}/>
    <Sidebar {...data.user}/>
</Main>