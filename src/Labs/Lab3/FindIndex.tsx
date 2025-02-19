export default function FindIndex() {
    let numberArray1: number[] = [1, 2, 4, 5, 6];
    let stringArray1: string[] = ['string1', 'string3'];

    const fourIndex: number = numberArray1.findIndex((a: number) => a === 4);
    const string3Index: number = stringArray1.findIndex((a: string) => a === 'string3');

    return (
        <div>
            <p>Index of 4 in numberArray1: {fourIndex}</p>
            <p>Index of 'string3' in stringArray1: {string3Index}</p>
        </div>
    );
}