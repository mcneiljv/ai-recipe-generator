import { Router, Request, Response } from 'express';

const router: Router = Router();

router.post('/generate-recipe', (req: Request, res: Response) => {
  const { ingredients, cuisine, diet } = req.body;
  res.json({
    message: `Generated recipe for ${cuisine} cuisine using ${ingredients.join(
      ', '
    )} for a ${diet} diet.`
  });
});

export default router;
