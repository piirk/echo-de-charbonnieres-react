const AboutPage = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-serif text-center mb-8">À propos de l'orchestre</h1>

      {/* Introduction */}
      <section className="mb-12">
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-8">
          <h2 className="text-2xl font-serif mb-4">Notre histoire</h2>
          <p className="text-lg text-gray-700 mb-4">
            L'Écho de Charbonnières est né en 1895 de la passion de quelques musiciens amateurs. Depuis plus d'un siècle, notre orchestre fait vivre la musique dans notre région, participant activement à la vie culturelle locale.
          </p>
          <p className="text-lg text-gray-700">
            Notre ensemble, composé d'une trentaine de musiciens, se produit régulièrement lors de concerts, fêtes locales et cérémonies, perpétuant ainsi une tradition musicale ancrée dans notre territoire.
          </p>
        </div>
      </section>

      {/* Notre mission */}
      <section className="mb-12">
        <h2 className="text-2xl font-serif mb-6">Notre mission</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Accessibilité</h3>
            <p className="text-gray-700">
              Nous croyons en une musique accessible à tous. Nos concerts sont généralement gratuits et ouverts à tous, permettant à chacun de découvrir la musique d'harmonie dans une ambiance conviviale.
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Transmission</h3>
            <p className="text-gray-700">
              Notre orchestre accueille des musiciens de tous niveaux, des débutants aux plus expérimentés. Nous favorisons l'apprentissage et le partage des connaissances musicales.
            </p>
          </div>
        </div>
      </section>

      {/* Notre répertoire */}
      <section className="mb-12">
        <h2 className="text-2xl font-serif mb-6">Notre répertoire</h2>
        <div className="bg-white shadow-lg rounded-lg p-6">
          <p className="text-gray-700 mb-4">
            Notre répertoire est éclectique et s'adapte à tous les publics et occasions :
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Musique classique et romantique</li>
            <li>Musiques de films et variétés</li>
            <li>Marches et musiques militaires</li>
            <li>Musiques traditionnelles</li>
            <li>Compositions originales pour orchestre d'harmonie</li>
          </ul>
        </div>
      </section>

      {/* Rejoignez-nous */}
      <section className="bg-amber-50 border border-amber-200 rounded-lg p-8">
        <h2 className="text-2xl font-serif mb-4">Rejoignez l'orchestre</h2>
        <p className="text-lg text-gray-700 mb-6">
          Vous jouez d'un instrument à vent ou à percussion ? Vous souhaitez partager votre passion pour la musique ? N'hésitez pas à nous rejoindre !
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-xl font-semibold mb-3">Répétitions</h3>
            <p className="text-gray-700">
              Tous les mardis soir<br />
              De 20h00 à 22h00<br />
              Salle de répétition, Charbonnières
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-3">Instruments recherchés</h3>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              <li>Flûtes</li>
              <li>Clarinettes</li>
              <li>Saxophones</li>
              <li>Trompettes</li>
              <li>Trombones</li>
              <li>Percussions</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutPage
