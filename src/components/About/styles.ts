import styled from "styled-components";

export const Container = styled.section`
  margin-top: 5rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;

  .hard-skills {
    margin-top: 1.6rem;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 1.8rem;
  }

  .hability {
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
      width: 3.4rem;
    }
  }

  h2 {
    display: inline-block;
    margin-bottom: 2rem;
    font-size: 3rem;
    margin-top: 0rem;
    color: #5ac8fa;
  }

  h1 {
    margin-top: 3rem;
    display: inline-block;
    margin-bottom: 2rem;
    font-size: 3rem;
    color: #5ac8fa;
  }

  h3 {
    margin-top: 2rem;
    color: var(--green);
  }

  p {
    font-size: 1.8rem;
    letter-spacing: 0.1rem;
    font-weight: 500;
  }

  img {
    margin-top: 2rem;
    width: 75%;
    filter: grayscale(0);
    transition: filter 0.5s;

    &:hover {
      filter: grayscale(0);
    }
  }

  @media only screen and (max-width: 480px) {
    img {
      width: 100%;
    }
  }

  @media (max-width: 960px) {
    display: block;
    text-align: center;

    .hard-skills {
      justify-content: center;
    }
  }


  .about-image {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 1rem;
  }
  
  .about-image img {
    width: 100%;
    max-width: 410px;
    height: auto;
    aspect-ratio: 1 / 1;
    border-radius: 50%;
    object-fit: cover;
  }
  
  /* 📱 For small devices like iPhone SE */
  @media (max-width: 480px) 
  {
    .about-image img {
      width: 90%;
      max-width: 300px;
      height: auto;
    }
  }
  
`;
