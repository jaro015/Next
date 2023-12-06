
// Komponnet wyswietla informacje o tym, kiedy dana strona jest generowana
export const GeneratedAt = () => {
    return (
        <p className="text-center text-xs italic my-3">
            Generated at: {new Date().toString()}
        </p>
    );
}