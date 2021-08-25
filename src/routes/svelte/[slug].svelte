<script context="module">
  let amount
  let category = `&category=${category}`
  let difficulty = `&difficulty=${difficulty}`
  export async function load() {
    const trivia = await fetch(`https://opentdb.com/api.php?amount=${amount}&type=multiple`)
    return {
      props: {

      }
    }
  }
</script>