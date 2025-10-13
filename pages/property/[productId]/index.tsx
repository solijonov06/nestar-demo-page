import {useRouter} from 'next/router';

const PropertyDetail = () => {
  const router = useRouter();
  const { productId } = router.query;
  return (
    <div>
      <h1>PropertyDetail Page {productId}</h1>
      <p>This is the PropertyDetail page.</p>
    </div>
  );
}

export default PropertyDetail;