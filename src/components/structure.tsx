export const Header: React.FC<{ header: string }> = ({ header }) => {
  return <h2 className=" mt-6 text-2xl xs:text-xl font-semibold">{header}</h2>;
};

export const SubHeader: React.FC<{ subHeader: string }> = ({ subHeader }) => {
  return <h3 className=" text-xl xs:text-lg font-semibold">{subHeader}</h3>;
};

export const Paragraph: React.FC<{ text: string }> = ({ text }) => {
  return (
    <p
      dangerouslySetInnerHTML={{ __html: text }}
      className="k xs:text-2xl text-xl"
    />
  );
};

export const ListItem: React.FC<{ data: string[] }> = ({ data }) => {
  return (
    <ul>
      {data.map((item, index) => {
        return (
          <li
            className="text-xl xs:text-lg items-center flex gap-6"
            key={index}
          >
            <span className=" h-2 mt-2 aspect-square bg-black rounded-full"></span>
            <span className="">{item}</span>
          </li>
        );
      })}
    </ul>
  );
};

export const Term: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="relative pb-10 text-secondary-main  flex gap-4 flex-col">
      {children}
    </div>
  );
};

const PageHeader: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <h1 className="text-5xl mb-4">{children}</h1>;
};

const TimeStamp: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <p className="font-semibold text-gray-800 mb-1">{children}</p>;
};

export const GroupHeader: React.FC<{
  title: string;
  effectiveDate: string;
  dueDate: string;
  texts: string[];
}> = ({ title, effectiveDate, dueDate, texts }) => {
  return (
    <div className="my-10">
      <PageHeader>{title}</PageHeader>
      <TimeStamp>{effectiveDate}</TimeStamp>
      <TimeStamp>{dueDate}</TimeStamp>

      <div className="items mt-6 flex flex-col gap-6">
        {texts.map((item, index) => {
          return (
            <p className="text-xl text-gray-800" key={index}>
              {item}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export const Bold: React.FC<{ text: string }> = ({ text }) => {
  return (
    <p
      dangerouslySetInnerHTML={{ __html: text }}
      className="text italic font-bold xs:text-2xl text-xl"
    />
  );
};
