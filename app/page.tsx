import Tray from "@/components/tray";

export default function Home() {
  return (
    <main className="h-full overflow-y-auto">
      <section className="flex flex-row h-full">
        <Tray />
      </section>
    </main>
  );
}
