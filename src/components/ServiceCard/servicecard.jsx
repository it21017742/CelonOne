export default function InfoCard({ title, description }) {
    return (
      <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
        <div className="flex flex-col grow mt-1 max-md:mt-10">
          <div className="self-center text-3xl font-bold text-white">
            {title}
          </div>
          <div className="mt-6 text-xl text-center text-zinc-600">
            {description}
          </div>
        </div>
      </div>
    );
  }