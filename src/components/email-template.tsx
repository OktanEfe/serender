import {
    Body,
    Container,
    Head,
    Heading,
    Hr,
    Html,
    Preview,
    Section,
    Text,
  } from "@react-email/components";
  import * as React from "react";
  
  type EmailTemplateProps = {
    ad: string;
    eposta: string;
    telefon: string;
    konu: string;
    mesaj: string;
  };
  
  export function EmailTemplate({
    ad,
    eposta,
    telefon,
    konu,
    mesaj,
  }: EmailTemplateProps) {
    return (
      <Html>
        <Head />
        <Preview>Serender iletişim formundan yeni mesaj — {ad}</Preview>
        <Body style={main}>
          <Container style={container}>
            <Text style={brandLabel}>SERENDER · İLETİŞİM FORMU</Text>
            <Heading style={heading}>Yeni Mesaj</Heading>
  
            <Section style={card}>
              <Text style={label}>Ad Soyad</Text>
              <Text style={value}>{ad}</Text>
  
              <Text style={label}>Konu</Text>
              <Text style={value}>{konu}</Text>
  
              <Hr style={hr} />
  
              <Text style={label}>E-posta</Text>
              <Text style={value}>{eposta}</Text>
  
              <Text style={label}>Telefon</Text>
              <Text style={value}>{telefon}</Text>
  
              <Hr style={hr} />
  
              <Text style={label}>Mesaj</Text>
              <Text style={messageStyle}>{mesaj}</Text>
            </Section>
  
            <Text style={footer}>
              Bu mesaj serenderekolojik.com iletişim formu üzerinden iletilmiştir.
            </Text>
          </Container>
        </Body>
      </Html>
    );
  }
  
  const main = {
    backgroundColor: "#FAF9F6",
    fontFamily: "Arial, sans-serif",
    padding: "40px 0",
  };
  
  const container = {
    maxWidth: "560px",
    margin: "0 auto",
    backgroundColor: "#ffffff",
    borderRadius: "18px",
    padding: "32px",
    border: "1px solid #E8E4DC",
  };
  
  const brandLabel = {
    fontSize: "11px",
    letterSpacing: "0.2em",
    color: "#1E4D3A",
    fontWeight: "600",
    margin: "0 0 16px",
    textTransform: "uppercase" as const,
  };
  
  const heading = {
    fontSize: "26px",
    fontWeight: "300",
    color: "#231F20",
    margin: "0 0 28px",
  };
  
  const card = {
    marginTop: "8px",
  };
  
  const label = {
    fontSize: "11px",
    textTransform: "uppercase" as const,
    letterSpacing: "0.1em",
    color: "#9C9C94",
    fontWeight: "500",
    margin: "0 0 6px",
  };
  
  const value = {
    fontSize: "15px",
    color: "#231F20",
    margin: "0 0 16px",
  };
  
  const messageStyle = {
    fontSize: "15px",
    lineHeight: "1.7",
    color: "#231F20",
    whiteSpace: "pre-line" as const,
    margin: "0",
  };
  
  const hr = {
    borderColor: "#E8E4DC",
    margin: "20px 0",
  };
  
  const footer = {
    fontSize: "12px",
    color: "#9C9C94",
    textAlign: "center" as const,
    margin: "24px 0 0",
  };
  