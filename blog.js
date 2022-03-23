const posts = [
  {
    title: 'Post #1',
    date: 'March 17, 2022',
    author: 'Ahmad',
    contents:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    title: 'Post #2',
    date: 'March 16, 2022',
    author: 'Yasser',
    contents:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    title: 'Post #3',
    date: 'March 15, 2022',
    author: 'Andrew',
    contents:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
];
arr1 = ['t-1', 'f11', 'f15'];
arr2 = ['f1', 'f12', 'f16'];
arr3 = ['f2', 'f13', 'f17'];
arr4 = ['f3', 'f14', 'f18']



for (let i = 0; i < posts.length; i++) {

  document.getElementById(arr1[i]).innerText = posts[i].title;
  document.getElementById(arr2[i]).innerText = posts[i].date;
  document.getElementById(arr3[i]).innerText = posts[i].author;
  document.getElementById(arr4[i]).innerText = posts[i].contents;

}
