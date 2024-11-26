interface TitleHeaderProps {
  title: string;
}

const TitleHeader = ({ title }: TitleHeaderProps) => {
  return (
    <div className="flex flex-col justify-center items-center w-full min-h-[7.5rem] text-left self-center">
      <div className="relative flex flex-col justify-center items-center h-auto">
        <h1 className="absolute top-[-8%] text-4xl font-black ">
          {title}
        </h1>
        <h1 className="text-6xl font-black opacity-20">
          {title}
        </h1>
      </div>
      <div className="relative flex flex-col justify-center items-center w-full h-auto mt-2">
        <div className="border-2 border-black dark:border-white w-[100px]"></div>
        <div className="border border-black dark:border-white w-[250px] opacity-30"></div>
      </div>
    </div>
  );
};

export default TitleHeader;
