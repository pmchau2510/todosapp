export default function logger(reducer) {
    return (prevStage, action, args) => {
        console.group(action);
        console.log('Prev State:', prevStage);
        console.log('Active Arguments:', args);
        const nextState = reducer(prevStage, action, args);
        console.log('Next State:', nextState);

        console.groupEnd();
        return nextState;
    }
}