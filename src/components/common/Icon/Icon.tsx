import iconSprite from '../../../assets/images/svg-icons.svg'

type IconPropsType = {
    id: string
    width?: string
    height?: string
    viewBox?: string
}
export const Icon = ({
                                            id,
                                            width,
                                            height,
                                            viewBox
                                        } : IconPropsType) => {
    return (
        <svg width={width || "30"} height={height || "30"} viewBox={viewBox || "0 0 30 30"}
             xmlns="http://www.w3.org/2000/svg">
            <use xlinkHref={`${iconSprite}#${id}`}/>
        </svg>
    );
}