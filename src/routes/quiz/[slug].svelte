<script context="module">
  let amount = 10
  let category
  let difficulty
  export async function load() {
    const res = await fetch(`https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}&type=multiple`)
    const quiz = await res.json()
    return {
      props: {
        quiz
      }
    }
  }
</script>