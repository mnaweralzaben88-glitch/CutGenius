export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { videoUrl } = req.body;

    if (!videoUrl) {
      return res.status(400).json({ error: 'الرجاء إدخال رابط يوتيوب أو ملف صحيح' });
    }

    return res.status(200).json({
      success: true,
      message: 'تم استلام الفيديو بنجاح، وجارٍ معالجته بواسطة الذكاء الاصطناعي',
      jobId: 'job_' + Math.random().toString(36).substring(2, 9),
      videoUrl: videoUrl
    });

  } catch (error) {
    return res.status(500).json({ error: 'حدث خطأ في السيرفر الداخلي' });
  }
}
