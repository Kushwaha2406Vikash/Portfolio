import React, { useRef } from "react";
import styled from "styled-components";
import emailjs from "@emailjs/browser";


const Container = styled.div`
  display: flex;
  justify-content: center;
  gap: 12px;
  z-index: 1;
  align-items: center;
  @media (max-width: 960px) {
    padding: 0px;
  }
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1350px;
  padding: 0px 0px 80px 0px;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const Title = styled.div`
  font-size: 52px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 16px;
  }
`;
const ContactForm = styled.form`
  width: 95%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  background-color: rgba(17, 25, 40, 0.83);
  border: 1px solid rgba(255, 255, 255, 0.125);
  padding: 32px;
  border-radius: 12px;
  box-shadow: rgba(23, 92, 230, 0.1) 0px 4px 24px;
  margin-top: 28px;
  gap: 12px;
`;
const ContactTitle = styled.div`
  font-size: 28px;
  margin-bottom: 6px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
`;
const ContactInput = styled.input`
  flex: 1;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.text_secondary + 50};
  outline: none;
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 12px 16px;
  &:focus {
    border: 1px solid ${({ theme }) => theme.primary};
  }
`;
const ContactInputMessage = styled.textarea`
  flex: 1;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.text_secondary + 50};
  outline: none;
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 12px 16px;
  &:focus {
    border: 1px solid ${({ theme }) => theme.primary};
  }
`;
const ContactButton = styled.input`
  width: 100%;
  text-decoration: none;
  text-align: center;
  background: hsla(271, 100%, 50%, 1);
  background: linear-gradient(
    225deg,
    hsla(271, 100%, 50%, 1) 0%,
    hsla(294, 100%, 50%, 1) 100%
  );
  background: -moz-linear-gradient(
    225deg,
    hsla(271, 100%, 50%, 1) 0%,
    hsla(294, 100%, 50%, 1) 100%
  );
  background: -webkit-linear-gradient(
    225deg,
    hsla(271, 100%, 50%, 1) 0%,
    hsla(294, 100%, 50%, 1) 100%
  );
  padding: 13px 16px;
  margin-top: 2px;
  border-radius: 12px;
  border: none;
  color: ${({ theme }) => theme.text_primary};
  font-size: 18px;
  font-weight: 600;
`;


const Contact = () => {
  const form = useRef(null); // Initialize ref with null

  // const handleSubmit = (e) => {
  //     e.preventDefault();

  //     if (form.current) { // Check if form.current is not null
  //         emailjs
  //             .sendForm(
  //                 "service_62v73jp",
  //                 "template_uumdq5c",
  //                 form.current,
  //                 "5aAcUTvqoxHTCRKGU"
  //             )
  //             .then(
  //                 (result) => {
  //                     alert("Message Sent");
  //                     form.current.reset(); // Corrected: Use form.current.reset()
  //                 },
  //                 (error) => {
  //                     alert("Error sending message: " + error.text); // Improved error handling
  //                 }
  //             );
  //     } else {
  //         console.error("Form element not found!"); // Handle the case where the form is not found
  //     }
  // };

  return (
      <Container>
          <Wrapper>
            
              <Title>Contact</Title>
              <Desc>
                  Feel free to reach out to me for any questions or opportunities!
              </Desc>
              <ContactForm ref={form} > {/* Add ref to the form */}
                  <ContactTitle>Email Me 🚀</ContactTitle>
                  <ContactInput placeholder="Your Email" name="from_email" required /> {/* Added required attribute */}
                  <ContactInput placeholder="Your Name" name="from_name" required/> {/* Added required attribute */}
                  <ContactInput placeholder="Subject" name="subject" required/> {/* Added required attribute */}
                  <ContactInputMessage placeholder="Message" name="message" rows={4} required/> {/* Added required attribute */}
                  <ContactButton type="submit" value="Send" />
              </ContactForm>
          </Wrapper>
      </Container>
  );
};

export default Contact;
