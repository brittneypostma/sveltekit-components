<script context="module">
  let amount
  let category = `&category=${category}`
  let difficulty = `&difficulty=${difficulty}`
  let type = `&type=${type}`
  export async function load() {
    const trivia = await fetch(`https://opentdb.com/api.php?amount=${amount}`)
    return {
      props: {

      }
    }
  }
</script>