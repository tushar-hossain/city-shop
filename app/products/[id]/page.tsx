export default async function ProductsDetails({ params }) {
  const { id } = await params;
  console.log(id);
  return <div>Products Details page</div>;
}
