export interface IPropsSlider{
    task?:{
        id:string;
        title:string;
        state?:string;
    };
    onArchiveTask?:Function;
    onPinTask?:Function;
}