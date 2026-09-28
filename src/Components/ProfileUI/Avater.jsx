import profileBackground from "../../assets/profile page image.jpg";

function UserProfile() {
  return (
    <section
      className="relative min-h-screen bg-cover bg-center px-6 py-16 text-white"
      style={{
        backgroundImage: `url(${profileBackground})`,
      }}
    >
      <div className="absolute inset-0 bg-black/65" />

      <div className="relative z-10 mx-auto max-w-5xl">
        {/* Page heading */}
        <div className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-500">
            FitZone
          </p>

          <h1 className="mt-2 text-4xl font-bold">My Profile</h1>

          <p className="mt-2 text-gray-200">
            Manage your account and membership.
          </p>
        </div>

        {/* Profile and Membership */}
        <div className="grid gap-6 md:grid-cols-3">
          {/* Profile Card */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 md:col-span-1">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-blue-600 text-2xl font-bold">
              PM
            </div>

            <h2 className="mt-5 text-2xl font-bold">Prime</h2>

            <p className="mt-1 text-gray-200">@prime</p>

            <p className="mt-4 text-sm text-gray-200">prime@example.com</p>
          </div>

          {/* Membership Card */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 md:col-span-2">
            <h2 className="text-2xl font-bold">Membership</h2>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl bg-black/30 p-4">
                <p className="text-sm text-gray-200">Plan</p>

                <p className="mt-1 text-lg font-semibold">Premium</p>
              </div>

              <div className="rounded-xl bg-black/30 p-4">
                <p className="text-sm text-gray-200">Status</p>

                <p className="mt-1 text-lg font-semibold text-green-400">
                  Active
                </p>
              </div>

              <div className="rounded-xl bg-black/30 p-4">
                <p className="text-sm text-gray-200">Access ID</p>

                <p className="mt-1 text-lg font-semibold">FZ-83921</p>
              </div>

              <div className="rounded-xl bg-black/30 p-4">
                <p className="text-sm text-gray-200">Expires</p>

                <p className="mt-1 text-lg font-semibold">24 Oct 2026</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default UserProfile;
