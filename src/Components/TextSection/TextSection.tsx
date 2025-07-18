import style from './TextSection.module.css'

interface TextSectionProps {
    Title: string;
    Content: React.ReactNode;
    Style?: {
        Background?: string;
        TextColor?: string;
    }
}

export const TextSection = ({Title, Content, Style}: TextSectionProps) => {
    return (
        <div 
            className={style.text_section}
            style={{
                ...(Style?.Background ? {background: Style.Background} : undefined),
                ...(Style?.TextColor ? {color: Style.TextColor} : undefined),
            }}
            >
            <h2>{Title}</h2>
            <hr style={{borderColor: Style?.TextColor}} className={style.hr}/>
            {Content}
        </div>
    )
}