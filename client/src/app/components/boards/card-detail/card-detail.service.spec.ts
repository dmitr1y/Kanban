import { TestBed } from '@angular/core/testing';

import { CardDetailService } from 'src/app/components/boards/card-detail/card-detail.service';

describe('CardDetailService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CardDetailService = TestBed.get(CardDetailService);
    expect(service).toBeTruthy();
  });
});
