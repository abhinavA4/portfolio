import React from 'react';
import styled from 'styled-components';

const Projectx = () => {
  return (
    <StyledWrapper>
      <div className="marquee">
        <div className="marquee_header">Infinite Marquee</div>
        <div className="marquee__inner">
          <div className="marquee__group">
            <span>🔥 Item 1</span>
            <span>✨ Item 2</span>
            <span>🚀 Item 3</span>
            <span>🌟 Item 4</span>
            <span>🎉 Item 5</span>
          </div>
          <div className="marquee__group">
            <span>🔥 Item 1</span>
            <span>✨ Item 2</span>
            <span>🚀 Item 3</span>
            <span>🌟 Item 4</span>
            <span>🎉 Item 5</span>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .marquee {
    overflow: hidden;
    /* hide the scrolling overflow */
    width: 100%;
    -webkit-mask-image: linear-gradient(
      to right,
      transparent 0%,
      black 10%,
      black 90%,
      transparent 100%
    );
    mask-image: linear-gradient(
      to right,
      transparent 0%,
      black 10%,
      black 90%,
      transparent 100%
    );
  }
  .marquee_header {
    font-size: 35px;
    font-weight: 800;
    text-align: center;
    margin-bottom: 20px;
  }
  .marquee__inner {
    display: flex;
    width: max-content;
    animation: marquee 15s linear infinite;
  }

  .marquee__group {
    display: flex;
  }

  .marquee__group span {
    margin: 0 1.5rem;
    white-space: nowrap;
    background: #000000;
    color: white;
    padding: 4px 16px 4px 12px;
    border-radius: 6px;
    font-size: 1.2rem;
  }

  @keyframes marquee {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-50%);
    }
  }`;

export default Projectx;
