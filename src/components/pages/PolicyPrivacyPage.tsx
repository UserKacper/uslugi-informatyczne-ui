const PrivacyPolicy = () => {
    return (

        <div className='p-8'>
            <div className='text-center w-full text-sm font-light'>

                <h1 className='p-4 font-semibold text-sm'>Polityka Prywatności</h1>
                <p>
                    Niniejsza Polityka Prywatności opisuje, w jaki sposób Twoje dane osobowe są zbierane, wykorzystywane i udostępniane, <br /> gdy odwiedzasz naszą stronę internetową lub korzystasz z naszych usług informatycznych.
                </p>

                <ol className='list-roman list-inside justify-center font-semibold flex flex-col'>
                    <li className='py-8'>Zbieranie danych osobowych</li>
                    <p className='text-center w-full text-sm font-light'>
                        Zbieramy dane osobowe, które nam przekazujesz, takie jak imię, nazwisko, adres e-mail, numer telefonu oraz inne informacje kontaktowe. Możemy również zbierać informacje o Twojej aktywności na naszej stronie internetowej.
                    </p>

                    <li className='py-8'>Wykorzystywanie danych osobowych</li>
                    <p className='text-center w-full text-sm font-light'>
                        Twoje dane osobowe są wykorzystywane w celu świadczenia naszych usług, komunikacji z Tobą, poprawy naszych usług oraz w celach marketingowych, jeśli wyraziłeś na to zgodę.
                    </p>
                    <li className='py-8'>Udostępnianie danych osobowych</li>
                    <p className='text-center w-full text-sm font-light'>
                        Nie udostępniamy Twoich danych osobowych osobom trzecim, chyba że jest to konieczne do świadczenia naszych usług, zgodne z prawem lub jeśli wyraziłeś na to zgodę.
                    </p>
                    <li className='py-8'>Twoje prawa</li>
                    <p className='text-center w-full text-sm font-light'>
                        Masz prawo do dostępu do swoich danych osobowych, ich poprawiania, usunięcia oraz ograniczenia ich przetwarzania. Możesz również wycofać swoją zgodę na przetwarzanie danych osobowych w dowolnym momencie.
                    </p>
                    <li className='py-8'>Kontakt</li>
                    <p className='text-center w-full text-sm font-light'>
                        Jeśli masz jakiekolwiek pytania dotyczące naszej Polityki Prywatności, prosimy o kontakt pod adresem e-mail: kontakt@yourcompany.com.
                    </p>
                </ol>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
