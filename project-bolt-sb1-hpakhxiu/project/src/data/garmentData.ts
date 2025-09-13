import { GarmentType, UpcyclingIdea } from '../types';

export const garmentTypes: GarmentType[] = [
  { id: 'tshirt', name: 'T-Shirt', category: 'tops' },
  { id: 'jeans', name: 'Jeans', category: 'bottoms' },
  { id: 'saree', name: 'Saree', category: 'traditional' },
  { id: 'kurta', name: 'Kurta', category: 'traditional' },
  { id: 'shirt', name: 'Shirt', category: 'tops' },
  { id: 'dress', name: 'Dress', category: 'tops' },
  { id: 'jacket', name: 'Jacket', category: 'tops' },
  { id: 'scarf', name: 'Scarf', category: 'accessories' },
];

export const upcyclingIdeas: Record<string, UpcyclingIdea[]> = {
  tshirt: [
    {
      id: 'tshirt-tote',
      title: 'Tote Bag',
      description: 'Transform your old t-shirt into a stylish, reusable tote bag',
      difficulty: 'Easy',
      timeRequired: '30 minutes',
      materials: ['Scissors', 'Needle', 'Thread', 'Ruler'],
      steps: [
        'Cut off the sleeves of the t-shirt',
        'Cut a deeper neckline to create handles',
        'Turn the shirt inside out',
        'Sew the bottom hem closed',
        'Turn right side out and your tote is ready!'
      ],
      videoUrl: 'https://www.youtube.com/watch?v=VoXGTUhPnNI',
      ecoImpact: {
        waterSaved: 2700,
        co2Reduced: 5.9,
        wasteReduced: '150g textile waste'
      }
    },
    {
      id: 'tshirt-crop',
      title: 'Crop Top',
      description: 'Give your oversized t-shirt a trendy makeover',
      difficulty: 'Easy',
      timeRequired: '20 minutes',
      materials: ['Scissors', 'Measuring tape', 'Fabric marker'],
      steps: [
        'Try on the t-shirt and mark desired length',
        'Cut straight across at the marked line',
        'Optional: Create a tied front by cutting a slit up the center',
        'Hem the bottom if desired',
        'Style and wear your new crop top!'
      ],
      videoUrl: 'https://www.youtube.com/watch?v=example2',
      ecoImpact: {
        waterSaved: 2700,
        co2Reduced: 5.9,
        wasteReduced: '100g textile waste'
      }
    },
    {
      id: 'tshirt-pillowcase',
      title: 'Pillowcase',
      description: 'Create a unique pillowcase from your favorite old tee',
      difficulty: 'Medium',
      timeRequired: '45 minutes',
      materials: ['Scissors', 'Sewing machine', 'Thread', 'Pins'],
      steps: [
        'Cut the t-shirt to pillow dimensions plus seam allowance',
        'Pin the pieces together, right sides facing',
        'Sew three sides, leaving one end open',
        'Create a hem at the open end',
        'Turn right side out and insert pillow'
      ],
      videoUrl: 'https://www.youtube.com/watch?v=example3',
      ecoImpact: {
        waterSaved: 2700,
        co2Reduced: 5.9,
        wasteReduced: '200g textile waste'
      }
    }
  ],
  jeans: [
    {
      id: 'jeans-apron',
      title: 'Kitchen Apron',
      description: 'Turn old denim into a durable, stylish kitchen apron',
      difficulty: 'Medium',
      timeRequired: '1 hour',
      materials: ['Scissors', 'Sewing machine', 'Thread', 'Measuring tape'],
      steps: [
        'Cut the jeans into an apron shape, keeping the waistband',
        'Use the legs to create straps and ties',
        'Reinforce pocket areas for functionality',
        'Sew straps to the apron body',
        'Add decorative stitching if desired'
      ],
      videoUrl: 'https://www.youtube.com/watch?v=example4',
      ecoImpact: {
        waterSaved: 7600,
        co2Reduced: 33.4,
        wasteReduced: '500g textile waste'
      }
    },
    {
      id: 'jeans-tote',
      title: 'Denim Tote Bag',
      description: 'Create a sturdy tote bag from denim legs',
      difficulty: 'Medium',
      timeRequired: '1.5 hours',
      materials: ['Scissors', 'Sewing machine', 'Thread', 'Interfacing'],
      steps: [
        'Cut one leg off the jeans',
        'Sew the bottom closed',
        'Cut handles from the other leg or waistband',
        'Attach handles securely to the bag',
        'Add interior pockets if desired'
      ],
      videoUrl: 'https://www.youtube.com/watch?v=example5',
      ecoImpact: {
        waterSaved: 7600,
        co2Reduced: 33.4,
        wasteReduced: '600g textile waste'
      }
    },
    {
      id: 'jeans-patchwork',
      title: 'Patchwork Jacket',
      description: 'Create a unique jacket using denim patches',
      difficulty: 'Hard',
      timeRequired: '3 hours',
      materials: ['Multiple denim pieces', 'Sewing machine', 'Thread', 'Pattern'],
      steps: [
        'Cut denim into various patch shapes',
        'Arrange patches in desired pattern',
        'Sew patches together to create fabric panels',
        'Follow jacket pattern to assemble',
        'Add finishing touches and hardware'
      ],
      videoUrl: 'https://www.youtube.com/watch?v=example6',
      ecoImpact: {
        waterSaved: 15200,
        co2Reduced: 66.8,
        wasteReduced: '1kg textile waste'
      }
    }
  ],
  saree: [
    {
      id: 'saree-dress',
      title: 'Flowing Dress',
      description: 'Transform a saree into a beautiful flowing dress',
      difficulty: 'Medium',
      timeRequired: '2 hours',
      materials: ['Scissors', 'Sewing machine', 'Thread', 'Dress pattern'],
      steps: [
        'Choose a section of the saree for the dress body',
        'Cut according to your dress pattern',
        'Use border designs as decorative elements',
        'Sew the dress together',
        'Add finishing touches with remaining fabric'
      ],
      videoUrl: 'https://www.youtube.com/watch?v=example7',
      ecoImpact: {
        waterSaved: 4000,
        co2Reduced: 15.2,
        wasteReduced: '400g textile waste'
      }
    },
    {
      id: 'saree-cushion',
      title: 'Cushion Covers',
      description: 'Create beautiful cushion covers from saree fabric',
      difficulty: 'Easy',
      timeRequired: '1 hour',
      materials: ['Scissors', 'Sewing machine', 'Thread', 'Zipper'],
      steps: [
        'Cut fabric to cushion dimensions plus seam allowance',
        'Use decorative borders as design elements',
        'Sew three sides together',
        'Install zipper on the fourth side',
        'Turn right side out and insert cushion'
      ],
      videoUrl: 'https://www.youtube.com/watch?v=example8',
      ecoImpact: {
        waterSaved: 4000,
        co2Reduced: 15.2,
        wasteReduced: '200g textile waste'
      }
    },
    {
      id: 'saree-curtains',
      title: 'Elegant Curtains',
      description: 'Use saree fabric to create stunning window curtains',
      difficulty: 'Medium',
      timeRequired: '2.5 hours',
      materials: ['Scissors', 'Sewing machine', 'Thread', 'Curtain rod', 'Hooks'],
      steps: [
        'Measure window dimensions',
        'Cut saree fabric to required size',
        'Create rod pocket at the top',
        'Hem all edges for a clean finish',
        'Hang and enjoy your new curtains'
      ],
      videoUrl: 'https://www.youtube.com/watch?v=example9',
      ecoImpact: {
        waterSaved: 4000,
        co2Reduced: 15.2,
        wasteReduced: '600g textile waste'
      }
    }
  ],
  kurta: [
    {
      id: 'kurta-tunic',
      title: 'Modern Tunic',
      description: 'Redesign your kurta into a contemporary tunic',
      difficulty: 'Medium',
      timeRequired: '1.5 hours',
      materials: ['Scissors', 'Sewing machine', 'Thread', 'Measuring tape'],
      steps: [
        'Adjust the length and fit of the kurta',
        'Modify the neckline for a modern look',
        'Take in or let out seams as needed',
        'Add contemporary design elements',
        'Finish all seams properly'
      ],
      videoUrl: 'https://www.youtube.com/watch?v=example10',
      ecoImpact: {
        waterSaved: 3200,
        co2Reduced: 12.1,
        wasteReduced: '300g textile waste'
      }
    }
  ],
  shirt: [
    {
      id: 'shirt-apron',
      title: 'Button-Up Apron',
      description: 'Convert a dress shirt into a stylish cooking apron',
      difficulty: 'Easy',
      timeRequired: '45 minutes',
      materials: ['Scissors', 'Thread', 'Needle', 'Fabric ties'],
      steps: [
        'Cut the shirt to apron length',
        'Remove sleeves if desired',
        'Add ties at the waist and neck',
        'Reinforce button placket for durability',
        'Optional: add patch pockets'
      ],
      videoUrl: 'https://www.youtube.com/watch?v=example11',
      ecoImpact: {
        waterSaved: 2900,
        co2Reduced: 8.7,
        wasteReduced: '250g textile waste'
      }
    }
  ]
};