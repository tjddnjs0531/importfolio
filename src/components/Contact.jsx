import "./Contact.scss";

const Contact = () => {
  return (
    <div id="contact">
      <div class="inner">
        <div class="title-wrap">
          <h2 class="title">
            <span>C</span>
            <span>o</span>
            <span>n</span>
            <span>t</span>
            <span>a</span>
            <span>c</span>
            <span>t</span>
          </h2>
          <p class="desc fade-in-box">imsungwon31@gmail.com</p>
        </div>

        <div class="container">
          <a href="mailto:imsungwon31@gmail.com" class="mail">
            <desc class="hide">메일 보내기</desc>
          </a>
          <div>
            <h3 class="fade-in-box">
              ( 기본기가 탄탄하고, 끊임없이 성장하는 인재 )
            </h3>
            <p class="fade-in-box delay" data-delay="0.3">
              메일을 보내주시면 확인 후 최대한 빠르게 회신 드리겠습니다.
            </p>
          </div>
        </div>
      </div>

      <div class="flow-text-track">
        <div class="flow-text">
          Cord → Design → Reality Cord → Design → Reality Cord → Design →
          Reality Cord → Design → Reality Cord → Design → Reality Cord → Design
          → Reality Cord → Design → Reality
        </div>
      </div>
    </div>
  );
};

export default Contact;
