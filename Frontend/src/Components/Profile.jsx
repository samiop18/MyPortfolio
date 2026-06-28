
import styled from 'styled-components';

const Profile = () => {
  return (
    <StyledWrapper>
      <div className="card flex flex-col gap-2">
        <div className="image">
            <img src='profileImg.jpeg'></img>
        </div>
        <h1 className='text-2xl lg:text-3xl font-extrabold text-gray-300'>About <span style={{color:"#fc0384"}}>Me</span></h1>
        <p className='text-gray-400 text-sm w-9/10 text-center'>Analytical <span style={{color:"#fc0384"}}>Full-Stack Developer</span> and <span style={{color:"#fc0384"}} >Computer Science undergraduate</span> blending modern MERN architecture with rigorous problem-solving to scalable, high-performance web applications and backend systems.</p>
        <a href="resume_SAMITESH.pdf" className='button text-center'>View Resume</a>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .card {
    position: relative;
    width: 360px;
    height: 520px;
    background-color: #000;
    display: flex;
    flex-direction: column;
    padding-left:20px;
    padding-right:20px;
    align-items: center;
    padding-top: 20px;
    gap: 12px;
    border-radius: 8px;
    cursor: pointer;
    box-shadow:0 4px 28px #fc0384;
  }
    .image{
        overflow:hidden;
        background-color:white;
        height:260px;
        width:320px;
        m-auto;
        border-radius:20px;
        transition:all 0.4s ease;
    }

    img{
        width:100%;
        height:260px;
        object-fit:cover;
        border-radius:20px; 
        shrink-0;
        transition:all 0.4s ease;
       
    }
    img:hover{
      transform:translateY(8%) scale(1.2);
    }

   

  .card::before {
    content: "";
    position: absolute;
    inset: 0;
    left: -5px;
    margin: auto;
    width: 338px;
    height: 430px;
    border-radius: 10px;
    background: linear-gradient(-45deg, #fc0384 0%, #fc0384 100%);
    z-index: -10;
    pointer-events: none;
    box-shadow:0px 4px 24px #fc0384;
    transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  .card::after {
    content: "";
    z-index: -1;
    position: absolute;
    inset: 0;
    background: linear-gradient(-45deg, #fc0384 0%, #fc0384 100%);
    transform: translate3d(0, 0, 0) scale(0.95);
    filter: blur(20px);
  }
  .card:hover::after {
    filter: blur(30px);
  }

  .card:hover::before {
    transform: rotate(-90deg) scaleX(1.34) scaleY(0.77);
  }
    /* From Uiverse.io by reshades */ 
/* From Uiverse.io by gharsh11032000 */ 
.button {
  cursor: pointer;
  position: relative;
  padding: 10px 20px;
  font-size: 18px;
  color: #fc0384;
  border: 3px solid #fc0384;
  border-radius: 34px;
  background-color: transparent;
  font-weight: 600;
  transition: all 0.3s cubic-bezier(0.23, 1, 0.320, 1);
  overflow: hidden;
}

.button::before {
  content: '';
  position: absolute;
  inset: 0;
  margin: auto;
  width: 50px;
  height: 50px;
  border-radius: inherit;
  scale: 0;
  z-index: -1;
  background-color: #fc0384;
  transition: all 0.6s cubic-bezier(0.23, 1, 0.320, 1);
}

.button:hover::before {
  scale: 3;
}

.button:hover {
  color: #212121;
  scale: 1.1;
  box-shadow: 0 0px 20px #fc0384;
}

.button:active {
  scale: 1;
}
@media (max-width: 360px) {
  .card {
    width: 300px;
    height: 500px;
  }
    .card::before{
    width: 280px;
    height:400px;
}
    .image{
    width:240px;
    height:200px;
    }
    img{
    width:240px;
    height:200px;
    }
}


`;

export default Profile;
