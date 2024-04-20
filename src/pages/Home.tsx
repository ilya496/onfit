import React, { useState } from "react";
import { useSubscribeMutation } from "../features/email/emailApi";
import Loader from "../components/Loader";

function Home() {
  const [email, setEmail] = useState("");

  const [subscribe, { isLoading: isSubscribing }] = useSubscribeMutation();

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) =>
    setEmail(e.target.value);

  const handleSubscribe = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await subscribe({ email });
      setEmail("");
    } catch (error) {
      console.error("Failed to subscribe", error);
    }
  };

  return (
    <>
      {isSubscribing && <Loader />}
      <main className="main">
        <section className="hero">
          <div className="container">
            <div className="hero__content">
              <h1 className="hero__title">Hero section</h1>
              <p className="hero__description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos,
                quaerat! Minima perferendis rem laboriosam voluptates error
                molestias, vel aperiam, quis doloremque deserunt officiis, esse
                debitis sint provident? Voluptas molestias fugit ipsum magnam et
                atque tenetur maxime sint a ipsam eius vero, ducimus perferendis
                excepturi qui dolor repellat nemo ullam laborum!
              </p>
              <div className="hero__cta">
                <button className="btn btn--outline">Learn more</button>
                <button className="btn btn--fill">Get started</button>
              </div>
            </div>
          </div>
        </section>
        <section className="subscribe">
          <div className="container">
            <h2 className="section-title">Subscribe to a newsletter</h2>
            <div className="subscribe__content">
              <p className="subscribe__description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos,
                quaerat! Minima perferendis rem laboriosam voluptates error
                molestias, vel aperiam, quis doloremque deserunt officiis, esse
                debitis sint provident? Voluptas molestias fugit ipsum magnam et
                atque tenetur maxime sint a ipsam eius vero, ducimus perferendis
                excepturi qui dolor repellat nemo ullam laborum!
              </p>
              <form className="form subscribe__form" onSubmit={handleSubscribe}>
                <div className="form__group">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={email}
                    onChange={handleEmail}
                    placeholder="Enter your email"
                    className="form__input"
                  />
                </div>
                <button type="submit" className="btn btn--fill form__btn">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Home;
