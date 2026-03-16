import { glass } from '@/shared/lib/utils'

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 relative overflow-hidden flex items-center justify-center p-8">
      {/* Background Decorative Elements */}
      <div className="fixed top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-600/20 rounded-full blur-[120px] animate-pulse-slow" />
      <div className="fixed bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-600/20 rounded-full blur-[150px] animate-pulse-slow" style={{ animationDelay: '2s' }} />
      
      <div className="relative z-10 max-w-2xl w-full text-center">
        <div className={glass.card + " p-12 space-y-8"}>
          {/* Hero Content */}
          <div className="space-y-4">
            <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-6xl">
              SaaS Factory <span className="text-purple-400">V4</span>
            </h1>
            <p className="text-xl text-slate-400 max-w-lg mx-auto">
              Tu base tecnológica premium está lista. Diseños de cristal, animaciones fluidas y arquitectura escalable.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-slate-950 rounded-2xl font-bold hover:bg-slate-200 transition-all active:scale-95 shadow-xl shadow-white/10">
              Empezar ahora
            </button>
            <button className={glass.button + " px-8 py-4 !rounded-2xl"}>
              Ver componentes
            </button>
          </div>

          {/* Status Indicator */}
          <div className="pt-8 border-t border-white/5">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full">
              <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
              <span className="text-sm font-medium text-emerald-400">Diseño Liquid Glass Activo</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
