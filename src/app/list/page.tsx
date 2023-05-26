async function getData() {
  const res = await fetch('https://dummyjson.com/products?limit=100');

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  console.log(res);

  return res.json();
}

export default async function List() {
  const products = await getData();

  return (
    <main>
      {products.products.map((product: any) => {
        return <p key={product.id}>{product.title}</p>;
      })}
    </main>
  );
}
