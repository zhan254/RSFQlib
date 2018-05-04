* JSIM deck file generated with TimEx
* === DEVICE-UNDER-TEST ===
******************************************
* Begin .SUBCKT model                    *
* spice-sdb ver 4.28.2007                *
*                                        *
* RSFQ generic cell for MITLL sfq5ee     *
* Project under IARPA-BAA-16-03          *
* Authored 1 March 2016, JA Delport, SU  *
* Modified 19 Dec 2016, CJ Fourie, SU    *
*   (Added L17, IB06, optimized)         *
* Last mod 23 Mar 2018, L Schindler, SU  *
* (Added PTL drivers & Receivers and   *
*   reduced JJ count)          *
******************************************
*                   SET     RESET     CLK     OUT
*$Ports             in_set  in_reset  in_clk  out_out
.SUBCKT mitll_ndrot 51 66 43 61 
*==============  Begin SPICE netlist of main design ============
B01        5          33         jmitll     area=2.17884
B01rx1     50         54         jmitll     area=0.859672
B01rx2     65         69         jmitll     area=0.859672
B01rx3     42         46         jmitll     area=0.989203
B01tx1     58         62         jmitll     area=2.36135
B02        16         17         jmitll     area=1.64984
B02rx1     2          53         jmitll     area=1.00021
B02rx2     4          68         jmitll     area=1.00021
B02rx3     6          45         jmitll     area=0.94263
B03        3          31         jmitll     area=2.34644
B04        11         14         jmitll     area=1.95972
B05        14         35         jmitll     area=2.83676
B06        1          8          jmitll     area=1.90793
B07        10         12         jmitll     area=1.77494
B08        12         20         jmitll     area=1.16187
B09        23         25         jmitll     area=0.778214
B10        28         39         jmitll     area=1.63129
B11        59         73         jmitll     area=1.50789
IB01       0          41         pwl(0      0 5p 0.000223851)
IB01rx1    0          55         pwl(0      0 5p 0.000134142)
IB01rx2    0          70         pwl(0      0 5p 0.000134142)
IB01rx3    0          47         pwl(0      0 5p 0.000131798)
IB01tx1    0          64         pwl(0      0 5p 0.000195509)
IB02       0          30         pwl(0      0 5p 0.000152193)
IB03       0          7          pwl(0      0 5p 0.000198086)
IB04       0          24         pwl(0      0 5p 9.85166e-005)
IB05       0          27         pwl(0      0 5p 9.47282e-005)
IB06       0          29         pwl(0      0 5p 6.36747e-005)
L01        6          5          7.58325e-012    
L01rx1     51         50         1.91223e-012 
L01rx2     66         65         1.91223e-012 
L01rx3     43         42         1.78689e-012 
L01tx1     59         58         3.54267e-012 
L02        17         19         1.33814e-012    
L02rx1     50         52         4.04813e-012 
L02rx2     65         67         4.04813e-012 
L02rx3     42         44         4.31353e-012 
L02tx1     58         60         3.52699e-012 
L03        4          3          4.38787e-012    
L03rx1     52         2          3.60359e-012 
L03rx2     67         4          3.60359e-012 
L03rx3     44         6          3.92595e-012 
L04        3          11         3.21697e-012    
L05        2          1          7.21828e-012    
L06        1          10         3.0677e-012    
L07        23         22         2.55963e-012    
L08        14         23         3.24389e-012    
L09        26         25         3.73817e-013    
L10        19         26         5.29936e-013    
L11        28         29         2.50877e-012    
L13        19         28         9.51366e-013    
L14        12         22         4.75276e-014    
L15        5          40         1.28747e-012    
L16        40         16         1.06777e-012    
L17        29         59         1.27911e-012    
LP01       0          33         1.56e-013   
LP01rx1    0          54         3.4e-013
LP01rx2    0          69         3.4e-013
LP01rx3    0          46         3.4e-013
LP01tx1    0          62         5e-014
LP02rx1    0          53         6e-014
LP02rx2    0          68         6e-014
LP02rx3    0          45         6e-014
LP03       0          31         1.35e-013   
LP05       0          35         1.46e-013   
LP06       0          8          1.33e-013   
LP08       0          20         2.16e-013   
LP10       0          39         1.46e-013   
LP11       0          73         1.35e-013   
LPR01      40         41         1.82e-013  
LPR01rx1   52         55         2e-013
LPR01rx2   67         70         2e-013
LPR01rx3   44         47         2e-013
LPR01tx1   58         64         2e-013
LPR02      3          30         1.53e-013  
LPR03      1          7          1.85e-013  
LPR04      22         24         2.506e-012  
LPR05      26         27         3.4e-014  
LRB01      0          34         1e-012  
LRB01rx1   0          56         5e-013
LRB01rx2   0          71         5e-013
LRB01rx3   0          48         5e-013
LRB01tx1   0          63         1e-012
LRB02      18         17         1e-012  
LRB02rx1   0          57         1e-012
LRB02rx2   0          72         1e-012
LRB02rx3   0          49         1e-012
LRB03      0          32         1e-012  
LRB04      15         14         1e-012  
LRB05      0          36         1e-012  
LRB06      0          9          1e-012  
LRB07      13         12         1e-012  
LRB08      0          21         1e-012  
LRB09      25         37         1e-012  
LRB10      0          38         1e-012  
LRB11      0          74         1e-012  
RB01       34         5          3.14842   
RB01rx1    56         50         7.97968
RB01rx2    71         65         7.97968
RB01rx3    48         42         6.93478
RB01tx1    63         58         2.90508
RB02       16         18         4.15792   
RB02rx1    57         2          6.85849
RB02rx2    72         4          6.85849
RB02rx3    49         6          7.27741
RB03       32         3          2.92353   
RB04       11         15         3.50045   
RB05       36         14         2.41822   
RB06       9          1          3.59546   
RB07       10         13         3.86487   
RB08       21         12         5.90417   
RB09       37         23         8.81494   
RB10       38         28         4.2052   
RB11       74         59         4.54935   
RINStx1    60         61         1.36      
.model jmitll jj(rtype=1, vg=2.8mV, cap=0.07pF, r0=160, rn=16, icrit=0.1mA)
.ends mitll_ndrot
*******************************
* === SOURCE DEFINITION ===
.SUBCKT SOURCECELL  8 22
b1    1  2  jjmitll100 area=2.25
b2    3  4  jjmitll100 area=2.25
b3    5  6  jjmitll100 area=2.5
ib1   0  2  pwl(0 0 5p 275ua)
ib2   0  5  pwl(0 0 5p 175ua)
l1    8  7  1p
l2    7  0  3.9p
l3    7  1  0.6p
l4    2  3  1.1p
l5    3  5  4.5p
l6    5  11 2p
lp2   4  0  0.2p
lp3   6  0  0.2p
lrb1  9  2  1p
lrb2  10 4  1p
lrb3  12 6  1p
rb1   1  9  4.31
rb2   3  10 4.31
rb3   5  12 3.88
b01   23 27 jmitll100 area=2
b02   24 26 jmitll100 area=1.62
ib01  0  30 pwl(0      0 5p 0.00023)
ib02  0  31 pwl(0      0 5p 8.2e-005)
l01   11 23 2.5e-012
l02   23 24 3.3e-012
l03   24 25 3.5e-013
lp01  0  27 5e-014
lp02  0  26 1.2e-013
lpr01 23 30 2e-013
lpr02 24 31 1.3e-012
lrb01 27 28 1e-012
lrb02 26 29 1e-012
rb01  28 23 4.85
rb02  29 24 6.3
rins  25 22 1.36
.model jjmitll100 jj(rtype=1, vg=2.8mv, cap=0.07pf, r0=160, rn=16, icrit=0.1ma)
.ENDS SOURCECELL
* === INPUT LOAD DEFINITION ===
.SUBCKT LOADINCELL  2 5
tload 2 0 5 0 lossless z0=5 td=10p
.ENDS LOADINCELL
* === OUTPUT LOAD DEFINITION ===
.SUBCKT LOADOUTCELL  2 5
tload 2 0 5 0 lossless z0=5 td=50p
.ENDS LOADOUTCELL
* === SINK DEFINITION ===
.SUBCKT SINKCELL  2
b1    1  9  jmitll100     area=1
b2    4  8  jmitll100     area=1
b3    5  7  jmitll100     area=1
ib1   0  10 pwl(0      0 5p 145u)
l1    2  1  0.2p
l2    1  3  4.3p
l3    3  4  4.6p
l4    4  5  6.0p
l5    5  6  1.3p
lp1   0  9  0.34p
lp2   0  8  0.06p
lp3   0  7  0.03p
lpr1  3  10 0.2p
lrb1  9  11 0.5p
lrb2  8  12 1p
lrb3  7  13 1p
rb1   11 1  15.4
rb2   12 4  11.3
rb3   13 5  11.3
rsink 6  0  2
.model jmitll100 jj(rtype=1, vg=2.8mv, cap=0.07pf, r0=160ohm, rn=16ohm, icrit=0.1ma)
.ENDS SINKCELL
* ===== MAIN =====
I_set 0 1 pwl(0 0 5p 0 1.25E-11 0 1.35E-11 0.001 1.45E-11 0 2.25E-11 0 2.35E-11 0.001 2.45E-11 0)
XSOURCEINset SOURCECELL 1 2
XLOADINset LOADINCELL 2 3
I_reset 0 4 pwl(0 0 5p 0 3.25E-11 0 3.35E-11 0.001 3.45E-11 0 4.25E-11 0 4.35E-11 0.001 4.45E-11 0)
XSOURCEINreset SOURCECELL 4 5
XLOADINreset LOADINCELL 5 6
I_clk 0 7 pwl(0 0 5p 0 5.25E-11 0 5.35E-11 0.001 5.45E-11 0)
XSOURCEINclk SOURCECELL 7 8
XLOADINclk LOADINCELL 8 9
XLOADOUTout LOADOUTCELL 10 11
XSINKOUTout SINKCELL 11
XDUT mitll_ndrot 3 6 9 10
.tran 2.5E-13 7E-11 0 2.5E-13
.PRINT NODEV 3 0
.PRINT NODEV 6 0
.PRINT NODEV 9 0
.PRINT NODEV 10 0
.PRINT DEVI XDUT_LP08
.PRINT DEVI XDUT_B08
.PRINT DEVI XDUT_L14
.PRINT DEVI XDUT_L07
.PRINT DEVI XDUT_B09
.PRINT DEVI XDUT_L09
.PRINT DEVI XDUT_L10
.PRINT DEVI XDUT_L13
.PRINT DEVI XDUT_L11
.PRINT DEVI XDUT_L17
.PRINT DEVI XDUT_L01TX1
.PRINT DEVI XDUT_B01TX1
.PRINT DEVI XDUT_LP01TX1
.PRINT DEVI XDUT_B11
.PRINT DEVI XDUT_LP11
.PRINT DEVI XDUT_B10
.PRINT DEVI XDUT_LP10
.PRINT DEVI XDUT_L02
.PRINT DEVI XDUT_B02
.PRINT DEVI XDUT_L16
.PRINT DEVI XDUT_L15
.PRINT DEVI XDUT_L01
.PRINT DEVI XDUT_L03RX3
.PRINT DEVI XDUT_L02RX3
.PRINT DEVI XDUT_B01RX3
.PRINT DEVI XDUT_LP01RX3
.PRINT DEVI XDUT_B02RX3
.PRINT DEVI XDUT_LP02RX3
.PRINT DEVI XDUT_B01
.PRINT DEVI XDUT_LP01
.PRINT DEVI XDUT_L08
.PRINT DEVI XDUT_B05
.PRINT DEVI XDUT_LP05
.PRINT DEVI XDUT_B04
.PRINT DEVI XDUT_L04
.PRINT DEVI XDUT_B03
.PRINT DEVI XDUT_LP03
.PRINT DEVI XDUT_L03
.PRINT DEVI XDUT_L03RX2
.PRINT DEVI XDUT_L02RX2
.PRINT DEVI XDUT_B01RX2
.PRINT DEVI XDUT_LP01RX2
.PRINT DEVI XDUT_B02RX2
.PRINT DEVI XDUT_LP02RX2
.PRINT DEVI XDUT_B07
.PRINT DEVI XDUT_L06
.PRINT DEVI XDUT_L05
.PRINT DEVI XDUT_L03RX1
.PRINT DEVI XDUT_L02RX1
.PRINT DEVI XDUT_B01RX1
.PRINT DEVI XDUT_LP01RX1
.PRINT DEVI XDUT_B02RX1
.PRINT DEVI XDUT_LP02RX1
.PRINT DEVI XDUT_B06
.PRINT DEVI XDUT_LP06
.end
