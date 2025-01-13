export function TheProject(props) {
    return (
        <div className="lg:w-[30%]  block  rounded-2xl overflow-hidden my-1">
            
            <img className='h-[100%] w-[100%] rounded-sm object-cover object-center' src={props.ProjectImgSrc} alt="Content Not Found" />
        </div>
    )
}