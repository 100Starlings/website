export default function ClientsSection() {
  return (
    <>
      <div className="flex w-full max-w-7xl justify-between items-center">
        <p className="header">
          Borrow our experience
        </p>
      </div>
      <div className="flex w-full max-w-7xl justify-between items-center">
        <p className="z-10 my-3 text-sm lg:text-md max-w-lg font-light">
          Clients we have worked with
        </p>
      </div>
      <div className="flex items-center justify-center mb-[6rem]">
        <div className="flex flex-wrap justify-center items-center px-4">
          <a href="https://www.yodel.co.uk" target="_blank" rel="noopener noreferrer">
            <img src="/images/clients/1/Yodel.svg" alt="yodel" className="max-w-xs mx-4 my-2 w-20 object-contain"/>
          </a>
          <a href="https://tuskercars.com/" target="_blank" rel="noopener noreferrer">
            <img src="/images/clients/1/Tusker.svg" alt="tusker" className="max-w-xs mx-4 my-2 w-20 object-contain"/>
          </a>
          <a href="https://www.bear.app" target="_blank" rel="noopener noreferrer">
            <img src="/images/clients/1/Bear.png" alt="bear" className="max-w-xs mx-4 my-2 w-16 object-contain"/>
          </a>
          <a href="https://www.learnamp.com" target="_blank" rel="noopener noreferrer">
            <img src="/images/clients/1/Learnamp.svg" alt="learnamp" className="max-w-xs mx-4 my-2 w-32 object-contain"/>
          </a>
          <a href="https://www.streetbank.com" target="_blank" rel="noopener noreferrer">
            <img src="/images/clients/1/Streetbank.png" alt="streetbank" className="max-w-xs mx-4 my-4 w-28 object-contain"/>
          </a>
          <a href="https://www.postshift.com" target="_blank" rel="noopener noreferrer">
            <img src="/images/clients/1/PostShift.svg" alt="post shift" className="max-w-xs mx-4 my-4 w-24 object-contain"/>
          </a>
          <a href="https://field.io/" target="_blank" rel="noopener noreferrer">
            <img src="/images/clients/1/Field.svg" alt="field" className="max-w-xs mx-4 my-4 w-28 object-contain"/>
          </a>
          <a href="https://www.abzed.com" target="_blank" rel="noopener noreferrer">
            <img src="/images/clients/1/Abzed.svg" alt="abzed" className="max-w-xs mx-4 my-4 w-32 object-contain"/>
          </a>
          <a href="https://www.sensata.com/" target="_blank" rel="noopener noreferrer">
            <img src="/images/clients/1/Sensata.png" alt="field" className="max-w-xs mx-4 my-4 w-20 object-contain"/>
          </a>
        </div>
      </div>
    </>
  );
}
