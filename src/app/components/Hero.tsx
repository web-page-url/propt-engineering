type HeroProps = {
  title: string;
  subtitle?: string;
};

export default function Hero({ title, subtitle }: HeroProps) {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16 text-center">
      <h1 className="text-4xl font-bold">{title}</h1>
      {subtitle && <p className="mt-4 text-lg">{subtitle}</p>}
    </div>
  );
}
