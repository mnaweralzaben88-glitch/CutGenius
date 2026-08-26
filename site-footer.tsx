import { Scissors } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function SiteFooter() {
  return (
    <footer className="px-4 pb-10 sm:px-6">
      <div className="mx-auto max-w-6xl">
        {/* Final CTA */}
        <div className="relative overflow-hidden rounded-3xl border border-border bg-card/60 px-6 py-14 text-center">
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute -top-20 left-1/2 size-[26rem] -translate-x-1/2 rounded-full bg-primary/20 blur-[110px]" />
          </div>
          <h2 className="mx-auto max-w-2xl text-balance text-3xl font-bold tracking-tight sm:text-4xl">
            جاهز لتحويل فيديوهاتك إلى مقاطع رائجة؟
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-pretty text-muted-foreground">
            انضم إلى آلاف صنّاع المحتوى الذين يوفّرون وقتهم مع CutGenius. ابدأ مجانًا اليوم.
          </p>
          <Button
            size="lg"
            className="mt-8 bg-gradient-to-l from-primary to-accent text-base font-bold text-primary-foreground hover:opacity-90"
          >
            ابدأ التجربة المجانية
          </Button>
        </div>

        {/* Footer bar */}
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-border/60 pt-8 sm:flex-row">
          <div className="flex items-center gap-2">
            <span className="flex size-8 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-accent">
              <Scissors className="size-4 text-primary-foreground" aria-hidden="true" />
            </span>
            <span className="font-bold">CutGenius</span>
          </div>
          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
            <a href="#" className="transition-colors hover:text-foreground">
              الشروط
            </a>
            <a href="#" className="transition-colors hover:text-foreground">
              الخصوصية
            </a>
            <a href="#" className="transition-colors hover:text-foreground">
              تواصل معنا
            </a>
          </nav>
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} CutGenius. جميع الحقوق محفوظة.
          </p>
        </div>
      </div>
    </footer>
  )
}
