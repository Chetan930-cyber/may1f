const Premium = () => {
  return (
    <div 
      className="min-h-screen bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center text-center p-10"
      style={{ backgroundImage: "url('https://source.unsplash.com/1600x900/?luxury,food')" }}
    >
      <div className="bg-white bg-opacity-90 p-10 rounded-lg shadow-2xl max-w-4xl">
        <h1 className="text-5xl font-extrabold text-yellow-600 mb-6">🎉 Welcome to the Premium Area!</h1>
        
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Indulge in the ultimate culinary experience with exclusive recipes, secret techniques, and expert tips from the world's finest chefs.
          Elevate your cooking skills and impress with gourmet dishes crafted to perfection.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
          <div className="bg-yellow-100 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-yellow-700">🌟 Premium Recipes</h2>
            <p className="mt-2 text-gray-600">
              Discover chef-curated recipes for exquisite meals, from Michelin-starred creations to hidden culinary gems.
            </p>
          </div>
          <div className="bg-yellow-100 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-yellow-700">🍳 Exclusive Cooking Tips</h2>
            <p className="mt-2 text-gray-600">
              Learn pro-level kitchen secrets, ingredient hacks, and step-by-step guides to master every dish.
            </p>
          </div>
          <div className="bg-yellow-100 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-yellow-700">🥂 Fine Dining Experience</h2>
            <p className="mt-2 text-gray-600">
              Transform your meals into fine-dining experiences with plating techniques, pairing guides, and luxury ingredient insights.
            </p>
          </div>
          <div className="bg-yellow-100 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-yellow-700">👨‍🍳 Masterclasses by Top Chefs</h2>
            <p className="mt-2 text-gray-600">
              Access exclusive video masterclasses taught by culinary legends, unlocking the secrets behind their signature dishes.
            </p>
          </div>
        </div>

        <div className="mt-8">
          <button className="bg-yellow-500 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-yellow-600 transition">
            Unlock Premium Access
          </button>
        </div>
      </div>
    </div>
  );
};

export default Premium;

