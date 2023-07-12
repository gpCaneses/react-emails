import {
  Body,
  Button,
  Column,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";
import * as React from "react";

interface VercelInviteUserEmailProps {
  username?: string;
  userImage?: string;
  invitedByUsername?: string;
  invitedByEmail?: string;
  teamName?: string;
  teamImage?: string;
  inviteLink?: string;
  inviteFromIp?: string;
  inviteFromLocation?: string;
}

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "";

export const VercelInviteUserEmail = ({
  username = "zenorocha",
  userImage = `${baseUrl}/static/vercel-user.png`,
  invitedByUsername = "bukinoshita",
  invitedByEmail = "bukinoshita@example.com",
  teamName = "My Project",
  teamImage = `${baseUrl}/static/vercel-team.png`,
  inviteLink = "https://vercel.com/teams/invite/foo",
  inviteFromIp = "204.13.186.218",
  inviteFromLocation = "São Paulo, Brazil",
}: VercelInviteUserEmailProps) => {
  const previewText = `Join ${invitedByUsername} on Vercel`;

  return (
    <Html>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Preview>{previewText}</Preview>
      <Tailwind>
        <Body className="bg-white my-auto mx-auto font-sans">
          <Container
            className="border border-solid border-[#eaeaea] rounded my-[40px] mx-auto p-[20px] w-[465px]"
            style={container}
          >
            <Section className="mt-[32px]">
              <Img
                src={`${baseUrl}/static/Devbox-logo.png`}
                className="my-0 mx-auto"
              />
            </Section>
            <Heading
              className="text-black text-[24px] font-normal text-center p-0 my-[20px] mx-0"
              style={{ fontFamily: "'Roboto', sans-serif" }}
            >
              <strong style={{ display: "inline" }}>
                Welcome to{" "}
                <Img
                  src={`${baseUrl}/static/devbox-name-logo.png`}
                  width="130"
                  height="18.66"
                  style={{ display: "inline", verticalAlign: "middle" }}
                />
              </strong>
            </Heading>
            <Text className="text-black text-[16px] leading-[24px]">
              Dear {username},
              <br />
              <br />
              Your project <strong>project name</strong> has been approved and
              will be managed by DevBox Management System.
              <br />
              <br />
              Currently, your project is in the <strong>Initiate</strong> phase,
              which means we will collect the base information and the initial
              business impact in order to continue with the next phase.
              <br />
              <br />
              Please, <strong>tell us about your project</strong>.
            </Text>

            <Section className="text-center mt-[32px] mb-[32px]">
              <Button
                pX={20}
                pY={12}
                className="bg-[#000000] text-white text-[15px] no-underline text-center"
                href={inviteLink}
                style={button}
              >
                Open SDD Online
              </Button>
            </Section>
            <Section className="my-[16px]"></Section>
            <Text className="text-black text-[16px] leading-[24px]">
              Regards,
              <br />
              DevBox Management System
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default VercelInviteUserEmail;

const container = {
  backgroundColor: "#f8f8f8",
  boxShadow: "0 0 2px rgba(0, 0, 0, 0.15)",
};

const button = {
  backgroundImage: "linear-gradient(90deg, #005bea, #00c6fb)",
  width: "150px",
  height: "22px",
  fontFamily: "'Roboto', sans-serif",
};
