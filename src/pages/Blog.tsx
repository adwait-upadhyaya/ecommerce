import Button from "../atoms/Button";
import Image from "../atoms/Image";
import { latest } from "../constants/latest";
import { progress } from "../constants/progress";

const Blog = () => {
  return (
    <>
      <div className="blog">
        <div className="blog__top d-flex justify-content-center">
          <div className="blog__top--img">
            <Image src="/line.png" />
          </div>
          <h1 className="blog__top--title">everworld</h1>
          <div className="blog__top__desc">
            <p className="blog__top__desc--text">
              We're on a mission to clean up a dirty industry.{" "}
            </p>
            <p className="blog__top__desc--text">
              These are the people, stories, and ideas that will help us get
              there.
            </p>
          </div>
        </div>

        <div className="blog__latest">
          <h1 className="blog__latest--title">The Latest</h1>
          <div className="blog__latest__items d-flex">
            {latest.map((product, index) => (
              <div key={index} className="blog__latest__item">
                <div className="blog__latest__item--img">
                  <Image src={product.src} />
                </div>
                <h1 className="blog__latest__item--title">{product.title}</h1>
                <div className="blog__latest__item--btn">
                  <Button>{product.btnText}</Button>
                </div>
              </div>
            ))}
          </div>
          <div className="blog__latest__btn">
            <div id="loadmore--btn">
              <Button type="secondary">Load more Articals</Button>
            </div>
          </div>
        </div>

        <div className="blog__keep">
          <Image src="/keep.png" />
        </div>

        <div className="blog__progress">
          <h1 className="blog__progress--title">Our Progress</h1>
          <div className="blog__progress__items d-flex">
            {progress.map((product, index) => (
              <div key={index} className="blog__progress__item">
                <div className="blog__progress__item--img">
                  <Image src={product.src} />
                </div>
                <p className="blog__progress__item--text">{product.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="social">
        <h1 className="social--title">Follow us on social for more</h1>
        <div id="social--btn">
          <Button>@Everlane Instagram</Button>
        </div>
      </div>
    </>
  );
};

export default Blog;
