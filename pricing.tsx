import { Check } from 'lucide-react'
import { Button } from '@/components/ui/button'

const plans = [
  {
    name: 'المجانية',
    price: '0',
    period: 'مجانًا للأبد',
    desc: 'جرّب قوة CutGenius دون أي التزام.',
    features: [
      '٣٠ دقيقة معالجة شهريًا',
      'مقاطع قصيرة تلقائية',
      'ترجمة تلقائية أساسية',
      'علامة مائية على المقاطع',
    ],
    cta: 'ابدأ مجانًا',
    highlighted: false,
  },
  {
    name: 'الأساسية',
    price: '15',
    period: 'شهريًا',
    desc: 'الأنسب لصنّاع المحتوى الأفراد.',
    features: [
      '١٥٠ دقيقة معالجة شهريًا',
      'بدون علامة مائية',
      'ترجمة تلقائية دقيقة',
      'تصدير بدقة 1080p',
      'دعم عبر البريد الإلكتروني',
    ],
    cta: 'اشترك الآن',
    highlighted: true,
  },
  {
    name: 'الاحترافية',
    price: '29',
    period: 'شهريًا',
    desc: 'للفرق والوكالات ومنشئي المحتوى المحترفين.',
    features: [
      'دقائق معالجة غير محدودة',
      'ميزات ذكاء اصطناعي متقدمة',
      'علامتك التجارية على المقاطع',
      'تصدير بدقة 4K',
      'جدولة النشر التلقائي',
      'دعم ذو أولوية',
    ],
    cta: 'اشترك الآن',
    highlighted: false,
  },
]

export function Pricing() {
  return (
    <section id="pricing" className="px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold text-accent">الأسعار</span>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
            باقات بسيطة تناسب كل منشئ محتوى
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground">
            ابدأ مجانًا وارتقِ حين تحتاج. يمكنك الإلغاء في أي وقت.
          </p>
        </div>

        <div className="mt-14 grid items-start gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col rounded-3xl border p-7 ${
                plan.highlighted
                  ? 'border-primary/60 bg-card glow-purple lg:-mt-4 lg:pb-10'
                  : 'border-border bg-card/60'
              }`}
            >
              {plan.highlighted && (
                <span className="absolute -top-3 right-7 rounded-full bg-gradient-to-l from-primary to-accent px-3 py-1 text-xs font-bold text-primary-foreground">
                  الأكثر شيوعًا
                </span>
              )}

              <h3 className="text-lg font-bold">{plan.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{plan.desc}</p>

              <div className="mt-6 flex items-end gap-1">
                <span className="text-5xl font-extrabold tracking-tight">${plan.price}</span>
                <span className="mb-1.5 text-sm text-muted-foreground">/ {plan.period}</span>
              </div>

              <Button
                className={`mt-6 w-full font-semibold ${
                  plan.highlighted
                    ? 'bg-gradient-to-l from-primary to-accent text-primary-foreground hover:opacity-90'
                    : ''
                }`}
                variant={plan.highlighted ? 'default' : 'secondary'}
              >
                {plan.cta}
              </Button>

              <ul className="mt-7 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm">
                    <span
                      className={`flex size-5 shrink-0 items-center justify-center rounded-full ${
                        plan.highlighted ? 'bg-primary/20 text-primary' : 'bg-secondary text-accent'
                      }`}
                    >
                      <Check className="size-3.5" aria-hidden="true" />
                    </span>
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
