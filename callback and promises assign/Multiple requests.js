async function fetchData() {
    try {
      const [todoRes, postRes] = await Promise.all([
        fetch('https://jsonplaceholder.typicode.com/todos/1'),
        fetch('https://jsonplaceholder.typicode.com/posts/1')
      ]);
  
      const todo = await todoRes.json();
      const post = await postRes.json();
  
      const result = {
        todo: todo,
        post: post
      };
  
      console.log(result);
    } catch (error) {
      console.error(error);
    }

  }

fetchData();
// fetchData().then((data) => console.log(data));