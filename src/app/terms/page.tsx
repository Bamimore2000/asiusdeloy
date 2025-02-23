import { termsData } from "@/constants/termsData";
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
  title: "Terms of Service | Asiusdeloy Ltd",
  description:
    "Review the Terms of Service for Asiusdeloy Ltd, covering eligibility, service usage, payments, intellectual property, privacy, disclaimers, and dispute resolution.",
  keywords: [
    "Asiusdeloy Ltd Terms",
    "Terms of Service",
    "Privacy Policy",
    "User Agreement",
    "Service Usage",
    "Payments",
    "Intellectual Property",
    "Liability Disclaimer",
    "Dispute Resolution",
  ],
  author: "Asiusdeloy Ltd",
  robots: "index, follow",
  og: {
    title: "Terms of Service | Asiusdeloy Ltd",
    description:
      "Understand our Terms of Service, including eligibility, permitted use, privacy, payments, and dispute resolution.",
    url: "https://www.asiusdeloyltd.co.uk/terms",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms of Service | Asiusdeloy Ltd",
    description:
      "Learn about Asiusdeloy Ltd's Terms of Service, including user rights, privacy, payments, and more.",
  },
};

const page = () => {
  return (
    <section className="py-14 wrapper">
      <GroupHeader
        dueDate="Last Updated: February 23, 2025"
        texts={[
          "Welcome to Asiusdeloy Ltd (“Company”, “we”, “our”, “us”). These Terms of Service Terms govern your use of our website and our services. By accessing or using our website, you agree to comply with these Terms. If you do not agree, please do not use our services.",
          "Questions or concerns? Reading this privacy notice will help you understand your privacy rights and choices. If you do not agree with our policies and practices, please do not use our Services. If you still have any questions or concerns, please contact us enquiries@asiusdeloyltd.co.uk",
        ]}
        effectiveDate="Effective Date: February 23, 2025"
        title="Terms of Service"
      />
      {termsData.map((section, index) => (
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
