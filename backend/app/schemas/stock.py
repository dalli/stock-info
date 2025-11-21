from pydantic import BaseModel
from datetime import datetime
from typing import Optional

class StockBase(BaseModel):
    symbol: str
    name: str
    price: float
    change: Optional[float] = 0.0
    change_percent: Optional[float] = 0.0
    volume: Optional[int] = 0
    market_cap: Optional[float] = 0.0

class StockCreate(StockBase):
    pass

class StockUpdate(BaseModel):
    symbol: Optional[str] = None
    name: Optional[str] = None
    price: Optional[float] = None
    change: Optional[float] = None
    change_percent: Optional[float] = None
    volume: Optional[int] = None
    market_cap: Optional[float] = None

class Stock(StockBase):
    id: int
    created_at: datetime
    updated_at: Optional[datetime] = None

    class Config:
        from_attributes = True
