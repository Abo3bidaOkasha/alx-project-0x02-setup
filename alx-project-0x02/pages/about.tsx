import Header from '../components/layout/Header';
import Button from '../components/common/Button';
@/components/common/Button
export default function About() {
  return (
    <>
      <Header />
      <main className="p-4 space-y-4">
        <h1 className="text-xl font-bold">About Page</h1>
        <Button size="small" shape="rounded-sm">Small</Button>
        <Button size="medium" shape="rounded-md">Medium</Button>
        <Button size="large" shape="rounded-full">Large</Button>
      </main>
    </>
  );
}
