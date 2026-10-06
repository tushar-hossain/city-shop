import Button from "@/components/Button/Button";
import Container from "@/components/Container/Container";
import { ErrorImage } from "@/public/assets/Image";
import Image from "next/image";

export default function NotFound() {
  return (
    <Container className="flex flex-col items-center gap-2 py-10">
      <Image className="max-w-60" src={ErrorImage} alt="error image" />
      <p className="text-xl font-semibold">Oops! Page not found</p>
      <p className="text-sm text-gray-500 max-w-80 text-center">
        Whoops, this is embarrassing. Looks like the page you were looking for
        wasn&apos;t found.
      </p>
      <Button href="/" className="rounded-sm">
        Back to Home
      </Button>
    </Container>
  );
}
