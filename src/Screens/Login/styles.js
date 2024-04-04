import styled, { keyframes } from "styled-components";

export const gradientAnimation = keyframes`
  100% {
    background-size: 4000px 1000px;
  }
`;

export const Container = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
  margin: 0;
  padding: 0 24px;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.dev/svgjs' width='1920' height='1080' preserveAspectRatio='none' viewBox='0 0 1920 1080'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1009%26quot%3b)' fill='none'%3e%3crect width='1920' height='1080' x='0' y='0' fill='%230e2a47'%3e%3c/rect%3e%3cpath d='M 0%2c56 C 76.8%2c147.8 230.4%2c500.4 384%2c515 C 537.6%2c529.6 614.4%2c171.4 768%2c129 C 921.6%2c86.6 998.4%2c291.8 1152%2c303 C 1305.6%2c314.2 1382.4%2c172.4 1536%2c185 C 1689.6%2c197.6 1843.2%2c329.8 1920%2c366L1920 1080L0 1080z' fill='%23184a7e'%3e%3c/path%3e%3cpath d='M 0%2c612 C 128%2c680 384%2c914.2 640%2c952 C 896%2c989.8 1024%2c797.6 1280%2c801 C 1536%2c804.4 1792%2c935.4 1920%2c969L1920 1080L0 1080z' fill='%232264ab'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1009'%3e%3crect width='1920' height='1080' fill='white'%3e%3c/rect%3e%3c/mask%3e%3c/defs%3e%3c/svg%3e");
  background-size: 2500px 1000px;
  background-position: -400px 0;
  color: #f9f9f9;

  animation: ${gradientAnimation} 10s infinite alternate linear;


@media (min-width: 500px) {
  body {
    padding: 0;
  }
}
 
`;
