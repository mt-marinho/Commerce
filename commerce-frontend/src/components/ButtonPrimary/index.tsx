import './styles.css'

type Prop = {
    name : string;
}

export default function ButtonPrimary({name} : Prop){
    return(
         <div className="dsc-btn dsc-btn-blue">{name}</div>
    );
}