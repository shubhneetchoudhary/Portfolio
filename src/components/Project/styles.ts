import styled from "styled-components";

export const Container = styled.section`
  margin-top: 2rem;

  h2 {
    text-align: center;
    font-size: 3rem; /* Reduced for smaller screens */
    margin-bottom: 2rem;
    color:#5AC8FA
  }

  .projects {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto;
    gap: 2rem;
    padding: 1rem;
    overflow: hidden;

    .project {
      padding: 1.5rem;
      background-color: #2b2b2b;
      border-radius: 1.2rem;
      transition: 0.25s;
      display: flex;
      flex-direction: column;
      height: 100%;
      color: #fff;

      &:hover {
        transform: translateY(-5px);
        background-color: var(--blue);
      }

      header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: var(--blue);
        margin-bottom: 2rem;

        .project-links {
          display: flex;
          align-items: center;
          gap: 0.8rem;
        }

        a > img {
          width: 4rem;
        }
      }

      h3 {
        margin-bottom: 1.5rem;
        font-size: 1.5rem;
      }

      p {
        letter-spacing: 0.12rem;
        margin-bottom: 1.5rem;
        font-size: 1.3rem;

        a {
          color: #ffff;
          border-bottom: 1px solid var(--green);
          transition: color 0.25s;

          &:hover {
            color: var(--green);
          }
        }
      }

      footer {
        margin-top: auto;

        .tech-list {
          display: flex;
          flex-wrap: wrap;
          gap: 1.5rem;
          font-size: 1.2rem;
          opacity: 0.6;
        }
      }
    }
  }

  /* Tablet and medium devices */
  @media (max-width: 960px) {
    .projects {
      grid-template-columns: 1fr 1fr;
    }
  }

  /* Small screens (phones) */
  @media (max-width: 740px) {
    .projects {
      grid-template-columns: 1fr;
      gap: 1.5rem;
    }

    h2 {
      font-size: 2.5rem;
    }

    .project {
      padding: 1.2rem;
    }
  }

  /* iPhone SE specific (375px and smaller) */
  @media (max-width: 400px) {
    h2 {
      font-size: 3rem;
    }

    .projects {
      grid-template-columns: 1fr;
      padding: 0.5rem;
      gap: 1rem;
    }

    .project {
      padding: 1rem;

      header {
        flex-direction: column;
        gap: 1rem;

        a > img {
          width: 3rem;
        }
      }

      footer .tech-list {
        flex-direction: column;
        gap: 0.8rem;
        font-size: 0.9rem;
      }
    }
  }
`;
