import { privacyData } from "@/constants/privacyData";
import {
  GroupHeader,
  Header,
  Term,
  Paragraph,
  SubHeader,
  ListItem,
  Bold,
} from "@/components/structure";
export const metadata = {
  title: "Privacy Policy | Asiusdeloy Ltd",
  description:
    "Learn how Asiusdeloy Ltd collects, uses, and protects your personal data. Review our privacy practices, data security measures, and user rights.",
  keywords: [
    "Asiusdeloy Ltd Privacy Policy",
    "Data Protection",
    "Personal Information",
    "User Privacy",
    "GDPR Compliance",
    "Cookies Policy",
    "Data Security",
    "User Rights",
  ],
  author: "Asiusdeloy Ltd",
  robots: "index, follow",
  og: {
    title: "Privacy Policy | Asiusdeloy Ltd",
    description:
      "Read Asiusdeloy Ltd’s Privacy Policy to understand how we handle your personal information and ensure data security.",
    url: "https://www.asiusdeloyltd.co.uk/privacy",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | Asiusdeloy Ltd",
    description:
      "Discover how Asiusdeloy Ltd protects your personal information and complies with privacy regulations.",
  },
};

const page = () => {
  return (
    <section className="py-14 wrapper">
      <GroupHeader
        dueDate="Last Updated: February 23, 2025"
        texts={[
          "Welcome to Asiusdeloy Ltd (“Company”, “we”, “our”, “us”). We are committed to protecting your privacy and ensuring that your personal data is handled securely. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website [Insert Website URL].",
          "By using our website, you agree to the terms outlined in this policy. If you do not agree, please do not use our services.",
          "Questions or concerns? Reading this privacy notice will help you understand your privacy rights and choices. If you do not agree with our policies and practices, please do not use our Services. If you still have any questions or concerns, please contact us enquiries@asiusdeloyltd.co.uk.",
        ]}
        effectiveDate="Effective Date: February 23, 2025"
        title="Privacy Policy"
      />
      {privacyData.map((section, index) => (
        <Term key={index}>
          <Header header={section.header} />
          {section.content.map((content, idx) => {
            if (content.type === "paragraph") {
              return <Paragraph key={idx} text={content.text!} />;
            } else if (content.type === "subheader") {
              return <SubHeader key={idx} subHeader={content.text!} />;
            } else if (content.type === "list") {
              return <ListItem key={idx} data={content.items!} />;
            } else if (content.type === "bold") {
              return <Bold key={idx} text={content.text!} />;
            } else {
              return null;
            }
          })}
        </Term>
      ))}
    </section>
  );
};
export default page;
