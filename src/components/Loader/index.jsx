import { ThreeDots } from "react-loader-spinner"

export function Loader(){
    return (
        <>
            <ThreeDots 
                    height="80" 
                    width="80" 
                    radius="9"
                    color="#f76190" 
                    ariaLabel="three-dots-loading"
                    wrapperStyle={{}}
                    wrapperClassName=""
                    visible={true}
                />
        </>
    )
}